import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function getPtBRDateString(date: string){
  const formattedDate = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true, 
  }).replace('cerca de', '').replace('h', 'H');
  return formattedDate;
}