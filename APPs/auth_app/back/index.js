const express = require('express');
const cors = require('cors');
const path = require('path'); //
const authRouter = require('./routes/authRoutes');
require('dotenv').config();
const PORT = process.env.PORT || 8000;

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.send('Auth API Backend Running');
});

app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log('Server is running on port: ', PORT);
});
