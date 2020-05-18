const express = require('express');
const router = express.Router();

//POST apis
router.post('/create_task',ctrl_2.create_task);
router.post('/update/:taskId',ctrl_2.update);

//GET apis
router.get('/all_tasks',ctrl_2.all_tasks);
router.get('/task/:taskId',ctrl_2.task);
router.get('/delete/:taskId',ctrl_2.delete);