const searchInput = document.getElementById('search-input');
const resultsArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result playlists');

function requestApi(searchTerm){
    const url = "http://localhost:3000/artists"
    fetch()
}


document.addEventListener('input', function() {
    const searchTerm = searchInput.ariaValueMax.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultsArtist.classList.remove('hidden');
        return;
    }

    requestApi(searchTerm);

})