export function getTaskColorByPriority(priority: string) {
    if(priority) {
        if (priority === 'medium') return 'bg-yellow-400';
        if (priority === 'low') return 'bg-green-400';
        if(priority === 'rapid') return 'bg-red-700'
        return 'bg-red-200';
    }
  }

export function getPriorityByColor(priority: string) {
  if(priority) {
    if (priority === 'bg-yellow-400') return 'medium';
    if (priority === 'bg-green-400') return 'low';
    if(priority === 'bg-red-700') return 'rapid'
    return 'high';
}
}

 export const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      //hour: 'numeric',
      //minute: 'numeric',
    };
    return new Intl.DateTimeFormat('en-EN', options).format(date);
  };