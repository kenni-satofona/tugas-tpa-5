const express = require('express');
const router = express.Router();

// Route untuk membuat todo baru
router.post('/', (req, res) => {
  // Logika untuk membuat todo baru
});

// Route untuk melihat semua todo
router.get('/', (req, res) => {
  // Logika untuk melihat semua todo
});

// Route untuk melihat detail todo
router.get('/:id', (req, res) => {
  // Logika untuk melihat detail todo
});

// Route untuk mengubah todo
router.put('/:id', (req, res) => {
  // Logika untuk mengubah todo
});

// Route untuk menghapus todo
router.delete('/:id', (req, res) => {
  // Logika untuk menghapus todo
});

// Route untuk menghapus semua todo
router.delete('/', (req, res) => {
  // Logika untuk menghapus semua todo
});

module.exports = router;
