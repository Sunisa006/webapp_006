// เรียกใช้งาน Express framework
const express = require('express');

// สร้าง Router สำหรับจัดการเส้นทาง (Route)
const router = express.Router();

// ===============================
// หน้าแรกของเว็บไซต์ (Home Page)
// ===============================

// เมื่อมีการเข้า URL หลัก เช่น http://localhost:3000/
router.get('/', (req, res) => {
    // render คือ การเปิดไฟล์ View
    res.render('index');
});

// =====================
// หน้า page2
// =====================
router.get('/history', (req, res) => {
    res.render('history');
});

// ส่งออก router เพื่อให้ไฟล์อื่นสามารถนำไปใช้งานได้
module.exports = router;