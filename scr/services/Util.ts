
const classes=[
    'Artes',
    'Biologia',
    'Ciências',
    'Educação física',
    'Física',
    'Geografia',
    'História',
    'Matemática',
    'Português',
    'Química',
  ];
  const diasDaSeamana=[
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ]

export default class Util
{

  static convertClasses(subNumber:any){
    if(isNaN(subNumber))
      return undefined; 
    return classes[subNumber-1];
  }
  static convertDiasDaSeamana(dayNumber:any){
    if(isNaN(dayNumber))
      return undefined; 
    return diasDaSeamana[dayNumber];
  }
  static convertDiasDaSeamanaArray(dayNumber:any[]){
    
    var dias:any = [];
    dayNumber.forEach(element => {
      dias.push(this.convertDiasDaSeamana(element));
    });
    return dias;
  }
  static getClasses()
  {
      return classes;
  }
  static getDiasDaSeamana()
  {
      return diasDaSeamana;
  }
  static convertHourToMinutes(time:string)
  {
    const [hour, minutes] = time.split(':');
    return  parseInt(hour)*60 + parseInt(minutes);
  }
}