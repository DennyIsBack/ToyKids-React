import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ptBR as BR } from '@mui/x-date-pickers/locales';
import ptBR from 'date-fns/locale/pt-BR';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Badge from '@mui/material/Badge';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import CheckIcon from '@mui/icons-material/Check';
import axios from 'axios';


const Calendar = () => {
    const [value, setValue] = useState(new Date());
    const [highlightedDays, setHighlightedDays] = useState([1, 2, 13]);

    const api = axios.create({
        baseURL: 'https://localhost:44326'
    });

    const handleDateChange = (newValue) => {
        setValue(newValue);
    };

    const handleDateAccept = () => {
        //Aqui você pode fazer a requisição POST com Axios
        api.get('/Calendar/ConsultDateCalendar', { params: { Date: value } })
            .then(response => {
                // Lógica para lidar com a resposta da requisição
                console.log('Requisição POST enviada com sucesso:', response);
            })
            .catch(error => {
                // Lógica para lidar com erros na requisição
                console.error('Erro ao enviar requisição POST:', error);
            });
    };

    return (
        <LocalizationProvider
            dateAdapter={AdapterDateFns}
            localeText={BR.components.MuiLocalizationProvider.defaultProps.localeText}
            adapterLocale={ptBR}
        >
            <StaticDatePicker
                // mask='____/__/__'
                variant='static'
                orientation='portrait'
                loading={ false } //loading
                value={value}
                timezone='America/Maceio'
                onChange={(newValue) => setValue(newValue)}
                onAccept={handleDateAccept} 
                renderInput={(params) => {
                    <TextField {...params} />;
                }}
                componentsProps={{ actionBar: { actions: ['accept', 'clear'] } }}
                renderDay={(day, _value, DayComponentProps) => {
                    const isSelected =
                        !DayComponentProps.outsideCurrentMonth &&
                        highlightedDays.indexOf(day.getDate()) >= 0;

                    return (
                        <Badge
                            key={day.toString()}
                            overlap='circular'
                            badgeContent={isSelected ? <CheckIcon color='red' /> : undefined}
                        >
                            <PickersDay {...DayComponentProps} />
                        </Badge>
                    );
                }}
            />
        </LocalizationProvider>
    );
};



export default Calendar;