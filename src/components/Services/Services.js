import React from 'react'
import './Services.css'

const Services = () => {
    return (
        <div>
            <div className="delivery-team-figure"></div>
            <div className="delivery-paragraph">
                <h1 className="h1-title">Delivery Team</h1>
                <p> Preparamos <strong>el equipo ideal para tu proyecto</strong> teniendo en cuenta la experiencia de cada integrante de nuestro staff.</p>
            </div>
            <button className="team-button"><label>Your team</label></button>
            <div className="staff-augmentation-figure"></div>
            <div className="staff-paragraph">
            <h1 className="h1-title">Staff Augmentation </h1>
                <p><strong>¡Potenciá tus servicios!</strong> Desde Avalith te brindamos respaldo en momentos donde más necesitas soporte para tus proyectos.</p>
            </div>
            <button className="staff-button"><label>Let´s go bigger</label></button>
            <div className="project-strategy-figure"></div>
            <div className="project-paragraph">
                <h1 className="h1-title">Project Strategy</h1>
                <p> Cada proyecto es único y está formado por distintas fases que requieren tareas específicas, un equipo de trabajo concreto.</p>
            </div>
            <button className="project-button"><label>Think with us</label></button>
            <div className="mpv-development-figure"></div>
            <div className="mpv-development-paragraph">
                <h1 className="h1-title">MVP Development </h1>
                <p>Crear un MVP para cada proyecto nos ayuda a evaluar de <strong>forma rápida y cuantitativa</strong> si la propuesta en cuestión es de valor para sus futuros usuarios.</p>
            </div>
            <button className="mvp-button"><label>Let´s do it</label></button>
            <div className="software-soutsourcing-figure"></div>
            <div className="software-soutsourcing-paragraph">
                <h1 className="h1-title">Software Outsourcing</h1>
                <p> Crear un MVP para cada</p>
            </div>
            <button className="software-button"><label>Let´s do it</label></button>
            <div className="launch-keep-growing-figure"></div>
            <div className="launch-keep-growing-paragraph">
                <h1 className="h1-title">Launch & Keep growing</h1>
                <p> Sabemos <strong>la importancia de lanzar un nuevo producto al mercado</strong> pero también entendemos que esta etapa es solo el comienzo del ciclo.</p>
            </div>
            <button className="launch-button"><label>We are here</label></button>

        </div>
    )
}

export default Services
