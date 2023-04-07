
import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

const Form = () => {
  const [formData, setFormData] = useState({
    peso: '',
    altura: '',
    largo: '',
    ancho: '',
    posicion: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let connection;
    try {
      const response = await axios.post('http://localhost:5000', formData);
      console.log(response.data);
      // insertar los datos del formulario en la tabla "paquete"
      const [results, _] = await connection.execute(
        `INSERT INTO paquete (posicion, ancho, alto, largo, estado, peso)
           VALUES (?, ?, ?, ?, ?, ?)`,
        [formData.posicion, formData.ancho, formData.altura, formData.largo, 'pendiente', formData.peso]
      );
      console.log(results);
    } catch (error) {
      console.log(error);
    } finally {
      if (connection) connection.end(); // cerrar la conexión si se ha establecido
    }
  };  

  return (
    <form onSubmit={handleSubmit}>
      <ContentPasteIcon sx={{ fontSize: 100 }} />
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <div>
          <TextField
            label="Peso"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            onChange={handleChange}
            value={formData.peso}
            type="number"
            name="peso"
            InputProps={{
              startAdornment: <InputAdornment position="start">kg</InputAdornment>,
            }}
          />
        </div>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <div>
          <TextField
            label="Altura"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            onChange={handleChange}
            value={formData.altura}
            type="number"
            name="altura"
            InputProps={{
              startAdornment: <InputAdornment position="start">cm</InputAdornment>,
            }}
          />
        </div>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <div>
          <TextField
            label="Largo"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            onChange={handleChange}
            value={formData.largo}
            type="number"
            name="largo"
            InputProps={{
              startAdornment: <InputAdornment position="start">cm</InputAdornment>,
            }}
          />
        </div>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <div>
          <TextField
            label="Ancho"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            onChange={handleChange}
            value={formData.ancho}
            type="number" 
            name="ancho"
            InputProps={{
              startAdornment: <InputAdornment position="start">cm</InputAdornment>,
            }}
          />
          </div>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <div>
            <TextField
              label="Posición"
              id="outlined-start-adornment"
              sx={{ m: 1, width: '25ch' }}
              onChange={handleChange}
              value={formData.posicion}
              type="posicion" 
              name="posicion"
              InputProps={{
                startAdornment: <InputAdornment position="start"/>
              }}
            />
          </div>
        </Box>
      <p/>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="contained" type="submit">Procesar un nuevo paquete</Button>
      </Stack>
    </form>
  );
};

export default Form;
