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
  let base = parseFloat(document.getElementById('base-of-triangular-pyramid').value)
  
  let height = parseFloat(document.getElementById('height-of-triangular-pyramid').value)
  
  let length = parseFloat(document.getElementById('length-of-triangular-pyramid').value)
  
  // process
  const volume = (base * height * length)/2
  
  // output
  document.getElementById('volume').innerHTML = 'The volume of the right triangular pyramid rounded to the nearest hundredth is: ' + volume.toFixed(3) + ' cm²'
}