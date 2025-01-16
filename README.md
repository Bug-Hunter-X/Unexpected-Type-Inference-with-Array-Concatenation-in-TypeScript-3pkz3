# Unexpected Type Inference with Array Concatenation in TypeScript

This repository demonstrates a subtle type inference issue in TypeScript when concatenating arrays using the spread syntax.  The issue can lead to unexpected runtime behavior, especially when dealing with arrays of different types or complex object structures.

## Bug Description

The `combine` function aims to concatenate two number arrays.  However, TypeScript's type inference might not always correctly deduce the type of the resulting array, potentially leading to runtime errors if the function is used with arrays containing unexpected types.

## Solution

The provided solution adds explicit type annotations to ensure the compiler correctly infers the type of the combined array, preventing potential runtime type errors.