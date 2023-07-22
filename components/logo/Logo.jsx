import { useState, useEffect } from "react";
import styles from "./logo.module.css";



function Logo() {
  const texts = [
    "PEQLE",
    "PHOENIQUELIFE"
  ];

  return (
<div class="title">
 <h1 className={styles.h1}> PHOENIQUELIFE</h1>

</div>
  );
}

export default Logo;
