import express from 'express';
import mongoose from 'mongoose';


const app =  express();

app.listen(5000, () => {
    console.log("Server is running on port 5000");
    console.log("Server 123");
});