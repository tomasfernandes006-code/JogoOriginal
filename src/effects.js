import * as THREE from 'three';
import { PALETTE } from './config.js';

/**
 * Particulas roxas flutuando em volta das anomalias.
 *
 * Desempenho: um unico objeto Points para todas as anomalias, com poucas
 * particulas por anomalia e atualizacao simples por frame.
 * As particulas somem quando a anomalia fica indisponivel ou e coletada.
 */
const PER_ANOMALY = 16;

export class AnomalyParticles {
  constructor({ scene, world }) {
    this.world = world;
    this.anomalies = world.anomalies;
    this.count = this.anomalies.length * PER_ANOMALY;
    this.time = 0;

    this.positions = new Float32Array(this.count * 3);
    this.seeds = new Float32Array(this.count * 3); // fase, raio, velocidade
    for (let i = 0; i < this.count; i += 1) {
      this.seeds[i * 3] = Math.random() * Math.PI * 2;
      this.seeds[i * 3 + 1] = 0.7 + Math.random() * 1.3;
      this.seeds[i * 3 + 2] = 0.4 + Math.random() * 0.9;
      this.positions[i * 3 + 1] = -50;
    }

    const geometry = new THREE.BufferGeometry();
    this.attribute = new THREE.BufferAttribute(this.positions, 3);
    this.attribute.setUsage(THREE.DynamicDrawUsage);
    geometry.setAttribute('position', this.attribute);
    // as particulas ficam espalhadas pelo mapa: sem culling por bounding sphere
    geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e5);

    this.material = new THREE.PointsMaterial({
      color: PALETTE.anomaly,
      size: 0.24,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    this.points = new THREE.Points(geometry, this.material);
    this.points.frustumCulled = false;
    scene.add(this.points);
  }

  update(dt) {
    this.time += dt;
    const t = this.time;
    for (let a = 0; a < this.anomalies.length; a += 1) {
      const anomaly = this.anomalies[a];
      const visible = anomaly.available && !anomaly.found;
      for (let p = 0; p < PER_ANOMALY; p += 1) {
        const i = a * PER_ANOMALY + p;
        const o = i * 3;
        if (!visible) {
          this.positions[o + 1] = -50;
          continue;
        }
        const phase = this.seeds[o];
        const radius = this.seeds[o + 1];
        const speed = this.seeds[o + 2];
        const angle = phase + t * speed;
        // sobe em espiral e reinicia, como brasas flutuando
        const rise = (t * 0.35 * speed + phase) % 1;
        this.positions[o] = anomaly.x + Math.cos(angle) * radius;
        this.positions[o + 1] = 0.3 + rise * 2.6;
        this.positions[o + 2] = anomaly.z + Math.sin(angle) * radius;
      }
    }
    this.attribute.needsUpdate = true;
  }
}
