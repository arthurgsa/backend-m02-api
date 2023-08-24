const date2 = new Date(2020, 3, 17, 12,15,30,624) // escolhendo o momento
///////////ano, mês -1, dia, hora, minuto, segundo, milesimo
  console.log(date2)

console.log('----------------------------------')
// timestamp
const finalDaCopa = new Date(2002, 5, 30, 8) // exercicio - dia e hora da final da copa do mundo 2002

  console.log(+finalDaCopa) //timesteamp 1
  console.log(finalDaCopa)

const finalMaisUmaHora = +finalDaCopa + 1000*60*60 //timesteamp 2
const maisUmaHoraDate = new Date(finalMaisUmaHora) // conversao timestamp para momento

  console.log(finalMaisUmaHora) //timesteamp 2
  console.log(maisUmaHoraDate)

console.log('----------------------------------')
//exercicio 2 - momento dos gols da final da copa do mundo 2002

const finalCopa2002 = new Date(2002, 5, 30, 8)
const primeiroGol = new Date (+finalCopa2002 + 1000*60*(45+15+22))
const segundoGol = new Date (+finalCopa2002 + 1000*60*(45+15+34))

  console.log(primeiroGol)
  console.log(segundoGol)

console.log('----------------------------------')
// comparar datas apenas com timestamps (+data1 > +data2)
// getters e setters

const hoje = new Date()

  console.log(hoje.getFullYear())
  console.log(hoje.getDay())
  console.log(hoje.getHours())
  console.log(hoje.getFullYear())

console.log('----------------------------------')
const outroDia = new Date(+hoje)
outroDia.setDate(0) // ultimo dia do mes anterior

  console.log(hoje)
  console.log(outroDia)

  console.log(outroDia.getDate())

outroDia.setHours(outroDia.getDate()) // adiciona em HORAS a quantidade de DIAS de outroDia (outroDia.getDate())

  console.log(hoje)
  console.log(outroDia)

  console.log('----------------------------------')

  // date-fns - https://date-fns.org/docs/Getting-Started
  // format  -   https://date-fns.org/v2.30.0/docs/format

  // convertendo fusos

  const { zonedTimeToUtc, utcToZonedTime, format } = require('date-fns-tz')

// Set the date to "2018-09-01T16:01:36.386Z"
const utcDate = zonedTimeToUtc('2018-09-01 18:01:36.386', 'Europe/Berlin')
console.log(utcDate)

// Obtain a Date instance that will render the equivalent Berlin time for the UTC date
const date = new Date('2018-09-01T16:01:36.386Z')
console.log(date)
const timeZone = 'Europe/Berlin'
const zonedDate = utcToZonedTime(date, timeZone)
// zonedDate could be used to initialize a date picker or display the formatted local date/time
console.log(zonedDate)

// Set the output to "1.9.2018 18:01:36.386 GMT+02:00 (CEST)"
const pattern = 'dd/MM/yyyy HH:mm:ss.SSS \'GMT\' XXX (z)'
const output = format(zonedDate, pattern, { timeZone: 'Europe/Berlin' })
console.log(output)

// #HOWTO# Como executar o código: 
// Apenas descomente o que deseja testar e execute com node.js