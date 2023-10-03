import React from 'react';
import Styles from '../Styles/RenderedInfoForm.module.css'

export default function RenderedInfoForm({ obj }) {

  const { name } = obj;
  return (
    <div className={Styles.outputBox}>{name}</div>
  );
}