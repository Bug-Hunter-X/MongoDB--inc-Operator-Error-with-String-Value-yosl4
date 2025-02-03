# MongoDB $inc Operator Error

This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The error occurs when attempting to increment a field by a non-numeric value (in this case, a string).

## Bug Description
The `$inc` operator is used to increment a numerical field by a specified value.  However, if the provided value is not a number, the operation will fail.

## Solution
The solution involves ensuring that the value provided to the `$inc` operator is a number.  This usually involves a type check or correcting the data source that provides the increment value.
