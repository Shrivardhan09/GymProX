
export const exerciseOption = {
    method: 'GET',
    headers: {
        // 'X-RapidAPI-Key': 'ef95d2f984msh8e9c2c91066ed77p1fff91jsn987a492c8d69',
        'X-RapidAPI-Key': 'ad54537362msha5fad2f50d4d9bbp14a738jsn0ac6114fef5a',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    }
};

export const youTubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ef95d2f984msh8e9c2c91066ed77p1fff91jsn987a492c8d69',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
}

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};