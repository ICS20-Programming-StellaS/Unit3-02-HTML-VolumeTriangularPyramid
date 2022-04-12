// Copyright (c) 2022 Stella S All rights reserved
//
// Created by: Stella S
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates the volume of a triangular pyramid
 */
function calculate () {
  // input
  let side_a = parseFloat(document.getElementById('side_a-of-triangular-pyramid').value)
  
  let side_b = parseFloat(document.getElementById('side_b-of-triangular-pyramid').value)
  
  let height = parseFloat(document.getElementById('height-of-triangular-pyramid').value)
  
  // process
  const volume = (1/6) * side_b * side_a * height
  
  // output
  document.getElementById('volume').innerHTML = 'The volume of the right triangular pyramid rounded to the nearest hundredth is: ' + volume.toFixed(3) + ' cm³ '
}