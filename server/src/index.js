const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: 'http://localhost:3000',
}))

const port = process.env.PORT || 1337;

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
})