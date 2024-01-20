'use client'
import React, { Component } from 'react';

class ScrollProgress extends Component {
 state = {
   percent: 0,
   circumference: 30 * 2 * Math.PI
 };

 componentDidMount() {
   window.addEventListener('scroll', this.handleScroll);
 }

 componentWillUnmount() {
   window.removeEventListener('scroll', this.handleScroll);
 }

 handleScroll = () => {
   let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
   let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   this.setState({ percent: Math.round((winScroll / height) * 100) });
 }

 render() {
   return (
     <div className="fixed inset-x-0 top-0 z-50">
       <div className="h-[1.5px] bg-gradient-to-r from-gray-600 to-blue-400 " style={{ width: `${this.state.percent}%` }}></div>
     </div>
   );
 }
}

export default ScrollProgress;
