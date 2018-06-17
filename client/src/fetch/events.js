const header = { headers: { 'Content-Type': 'application/json' } };

const onError = error => console.error('Error:', error);

const requestBody = data => Object.assign(header, { body: JSON.stringify(data) });

const request = (data, method) => ({ ...requestBody(data), ...header, method });

export const getAllMonth = (month, year) => fetch('/api/events/all/month?month='+month+'&year='+year).then(res => res.json()).catch(onError);

export const getOne = id => fetch('/api/events/'+id).then(res => res.json()).catch(onError);

export const create = data => fetch('/api/events', request(data, "POST")).then(res => res.json()).catch(onError);

export const update = data => fetch('/api/events/' + data.id, request(data, "PUT")).then(res => res.json()).catch(onError);

export const remove = data => fetch('/api/events/' + data.id, { ...header, method: 'DELETE' }).then(res => res.json()).catch(onError);