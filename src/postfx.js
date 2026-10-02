import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

/**
 * Glitch de tela: separacao de cores RGB e faixas horizontais deslocadas.
 *
 * Desempenho: o compositor so e usado enquanto ha glitch na tela. Sem
 * glitch o jogo renderiza direto, como antes (custo zero em repouso).
 * Seguranca: as faixas mudam no maximo ~12 vezes por segundo e o efeito
 * nao usa flashes brancos, so deslocamento e separacao de cor.
 */
const GlitchShader = {
  uniforms: {
    tDiffuse: { value: null },
    amount: { value: 0 },
    time: { value: 0 },
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse;
    uniform float amount;
    uniform float time;
    varying vec2 vUv;

    float hash(float n) { return fract(sin(n * 12.9898) * 43758.5453); }

    void main() {
      vec2 uv = vUv;
      float tick = floor(time * 12.0);

      // faixas horizontais deslocadas
      float band = floor(uv.y * 16.0);
      float roll = hash(band + tick * 7.13);
      float hit = step(0.74, roll);
      float shift = (hash(band * 3.1 + tick) - 0.5) * 0.14 * amount * hit;
      uv.x += shift;

      // separacao RGB (mais forte nas faixas atingidas)
      float split = (0.010 + 0.022 * hit) * amount;
      float r = texture2D(tDiffuse, uv + vec2(split, 0.0)).r;
      float g = texture2D(tDiffuse, uv).g;
      float b = texture2D(tDiffuse, uv - vec2(split, 0.0)).b;
      vec3 col = vec3(r, g, b);

      // linhas finas de varredura
      col *= 1.0 - 0.07 * amount * step(0.5, fract(uv.y * 220.0));

      gl_FragColor = vec4(col, 1.0);
    }
  `,
};

export class GlitchPost {
  constructor(renderer, scene, camera) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;

    const size = renderer.getSize(new THREE.Vector2());
    const pixelRatio = renderer.getPixelRatio();
    const target = new THREE.WebGLRenderTarget(size.x * pixelRatio, size.y * pixelRatio, {
      type: THREE.HalfFloatType,
      samples: 4, // mantem o antialias quando o glitch esta ligado
    });
    this.composer = new EffectComposer(renderer, target);
    this.composer.setPixelRatio(pixelRatio);
    this.composer.setSize(size.x, size.y);
    this.composer.addPass(new RenderPass(scene, camera));
    this.glitchPass = new ShaderPass(GlitchShader);
    this.composer.addPass(this.glitchPass);
    this.composer.addPass(new OutputPass());
  }

  /** Renderiza o frame; `level` 0..1 e a intensidade do glitch. */
  render(level, time) {
    if (level < 0.02) {
      this.renderer.render(this.scene, this.camera);
      return;
    }
    const uniforms = this.glitchPass.uniforms;
    uniforms.amount.value = Math.min(1, level);
    uniforms.time.value = time;
    this.composer.render();
  }

  resize(width, height) {
    this.composer.setSize(width, height);
  }
}
