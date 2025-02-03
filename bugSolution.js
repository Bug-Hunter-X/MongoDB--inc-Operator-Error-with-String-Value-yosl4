```javascript
// Correct usage of $inc operator with numeric value
db.collection('myCollection').updateOne({"_id": 1}, {"$inc": {"count": 1}});
```