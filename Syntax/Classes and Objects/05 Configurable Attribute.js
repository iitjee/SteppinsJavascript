/*  Making a property Non-Configurable  */

'use strict'

var cat = {
  name: {'first' : 'Fluffy', 'last' : 'Pussie'},
  color: 'White'
}

Object.defineProperty(cat, 'name', {configurable: false})
//once that the 'configurable' attribute is set to false, following can't be done

Object.defineProperty(cat, 'name', {enumerable: false}); //can't do
Object.defineProperty(cat, 'name', {configurable: true}); //can't do even this!
delete cat.name //can't do

Object.defineProperty(cat, 'name', {writable: false}); //can do!






