'use client'

import { PulseAnimate } from './PulseAnimate'
import { ScrollAnimate } from './ScrollAnimate'
import { ReactNode } from 'react'

export default function TestPulseAnimations() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">Testing New Pulse Animations</h1>
      
      {/* Pulse Animation Examples */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Pulse Animations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <PulseAnimate animation="pulse" delay={1} className="modern-box p-6 text-center">
            <h3>Normal Pulse</h3>
            <p>This element pulses continuously when visible</p>
          </PulseAnimate>
          
          <PulseAnimate animation="pulse-slow" delay={2} className="modern-box-dark p-6 text-center">
            <h3>Slow Pulse</h3>
            <p>This element pulses slowly when visible</p>
          </PulseAnimate>
          
          <PulseAnimate animation="pulse-fast" delay={3} className="modern-box p-6 text-center">
            <h3>Fast Pulse</h3>
            <p>This element pulses rapidly when visible</p>
          </PulseAnimate>
          
          <PulseAnimate animation="pulse-scale" delay={4} className="modern-box-dark p-6 text-center">
            <h3>Pulse Scale</h3>
            <p>This element scales up when visible</p>
          </PulseAnimate>
          
          <PulseAnimate animation="pulse-rotate" delay={5} className="modern-box p-6 text-center">
            <h3>Pulse Rotate</h3>
            <p>This element pulses and rotates when visible</p>
          </PulseAnimate>
        </div>
      </div>
      
      {/* Combined with existing animations */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Combined Animations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ScrollAnimate animation="fade-up" delay={1} className="modern-box p-6 text-center">
            <h3>Fade Up + Pulse</h3>
            <PulseAnimate animation="pulse" className="mt-4">
              <span className="inline-block">This fades up then pulses</span>
            </PulseAnimate>
          </ScrollAnimate>
          
          <ScrollAnimate animation="scale" delay={2} className="modern-box-dark p-6 text-center">
            <h3>Scale + Pulse Rotate</h3>
            <PulseAnimate animation="pulse-rotate" className="mt-4">
              <span className="inline-block">This scales in then pulse rotates</span>
            </PulseAnimate>
          </ScrollAnimate>
        </div>
      </div>
    </div>
  )
}