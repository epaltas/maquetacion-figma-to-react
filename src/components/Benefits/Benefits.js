import React from 'react'
import './Benefits.css'

const Benefits = () => {
    return (
        <div>
            <div className="h1-benefits">
                <h1>Benefits</h1>
                <h1 className="span-benefits">¿Por qué elegirnos y confiar en nuestro trabajo?</h1>
            </div>
            <div className="b-paragraph">
                <p ><strong>4 beneficios</strong> por los cuales la mayoría de los clientes optan trabajar con nosotros.</p>
            </div>
            <div className="flexible-contracts">
                <p ><strong style={{ color: 'red' }}>1.</strong> Flexible Contracts</p>
            </div>
            <div className="flexible-contracts-figure"></div>
            <div className="flexible-contracts-paragraph">
                <p>Ofrecemos <strong>contratos a corto y largo plazo</strong>, con cancelación flexible.</p>
            </div>
            <div className="account-manager">
                <p ><strong style={{ color: 'red' }}>2.</strong> Account Manager</p>
            </div>
            <div className="account-manager-figure"></div>
            <div className="account-manager-paragraph">
                <p>Listo para escalar tu equipo, <strong>disponibilidad full-time.</strong></p>
            </div>

            <div className="monthly-billing">
                <p ><strong style={{ color: 'red' }}>3.</strong> Monthly Billing</p>
            </div>
            <div className="monthly-billing-figure"></div>
            <div className="monthly-billing-paragraph">
                <p>Ofrecemos <strong>contratos a corto y largo plazo</strong>, con cancelación flexible.</p>
            </div>

            <div className="build-up-teams">
                <p ><strong style={{ color: 'red' }}>4.</strong> Build up teams</p>
            </div>
            <div className="build-up-teams-figure"></div>
            <div className="build-up-teams-paragraph">
                <p>Contamos con un equipo focalizado en conseguir talentos las 24hs del día.</p>
            </div>

        </div>
    )
}

export default Benefits
