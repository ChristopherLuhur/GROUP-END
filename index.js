const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const { MongoClient } = require('mongodb');
const pass = '2MMqF619rBCW9LrK';
const url = 'mongodb+srv://Ahmad:' + pass + '@cluster0.fypeuh5.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(url);
const dbName = 'user-login';

const collection1 = client.db(dbName).collection('user');
const collection2 = client.db(dbName).collection('katalog');
app.post('/tampil', async (req, res) => {
  try {
    await client.connect();
    console.log('Terhubung ke MongoDB');
    // Mengambil data dari MongoDB
    const cursor = collection1.find();
    const data_user = await cursor.toArray();

    console.log('Data User:', data_user);
  } catch (err) {
    console.error('Gagal mengambil atau menambahkan data:', err);
    res.status(500).json({ message: 'Gagal mengambil atau menambahkan data', error: err.message });
  } finally {
    await client.close();
    console.log('Tutup koneksi ke MongoDB');
  }
});

// jangan diganggu
app.post('/simpan', async (req, res) => {
  const name = req.body.nama;
  const password = req.body.pass;
  const data = { nama: name, pass: password };
  try {
    const result = await collection1.findOne({ nama: name });
    if (result) {
      res.status(400).send('Username Sudah ada');
      return
    }
    await collection1.insertOne(data);
    console.log(data);
    res.send(data)
  } catch (err) {
    console.log(err)
  }
})
let data_user
app.post('/masuk', async (req, res) => {
  const name = req.body.nama;
  const password = req.body.pass;
  const data = { nama: name, pass: password };
  try {
    const result = await collection1.findOne(data);
    if (!result) {
      res.status(400).send('Username atau password salah!');
      return
    }
    data_user = result;
    console.log(result);
    res.send(data)
  } catch (err) {
    console.log(err)
  }
})
app.get('/api/userdata', (req, res) => {
  console.log('/tampil')
  res.send(data_user);
})
// ========================================

app.post('/simpan/katalog', async (req, res) => {
  const id_image = data_user._id;
  const name = req.body.nama;
  const url_image = req.body.url_image;
  try {
    const data_katalog = { id_user: id_image, nama: name, url: url_image }
    const resp = await collection2.insertOne(data_katalog)
    console.log(resp)
  } catch(err) {
    console.log(err);
  }
})

let gambar = [
  { name: 'Nissan GTR', url: 'https://storage.googleapis.com/prod-nissan-indonesia/static-assets/brand/18tdigb-helios307c.jpg.ximg.l_6_h.smart.jpg' },
  { name: 'Lamborghini Huracan', url: 'https://media.istockphoto.com/id/486388014/id/foto/mobil-model-supercar-lamborghini-huracan-lp700-4.jpg?s=612x612&w=0&k=20&c=W_3Or9OnybZP4Wmo1K4e_5CUMC5l6cyn1n3P3s-lp0s=' },
  { name: 'Mazda', url: 'https://img.antaranews.com/cache/1200x800/2021/05/24/mazda-cx-3.jpg.webp' },
  { name: 'Toyota Supra', url: 'https://imgcdn.oto.com/large/gallery/color/38/2165/toyota-supra-color-716482.jpg' },
  { name: 'Nissan GTR', url: 'https://storage.googleapis.com/prod-nissan-indonesia/static-assets/brand/18tdigb-helios307c.jpg.ximg.l_6_h.smart.jpg' },
  { name: 'Lamborghini Huracan', url: 'https://media.istockphoto.com/id/486388014/id/foto/mobil-model-supercar-lamborghini-huracan-lp700-4.jpg?s=612x612&w=0&k=20&c=W_3Or9OnybZP4Wmo1K4e_5CUMC5l6cyn1n3P3s-lp0s=' },
  { name: 'Mazda', url: 'https://img.antaranews.com/cache/1200x800/2021/05/24/mazda-cx-3.jpg.webp' },
  { name: 'Toyota Supra', url: 'https://imgcdn.oto.com/large/gallery/color/38/2165/toyota-supra-color-716482.jpg' },
];
app.get('/katalog', async (req, res) => {
  const id_image = data_user._id;
  try {
    const data_katalog = await collection2.find({ id_user: id_image }).toArray();
    res.send(data_katalog);
  } catch (error) {
    console.error('Error retrieving data from the database:', error);
    res.status(500).send('Internal Server Error');
  }
  // res.send(gambar);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
