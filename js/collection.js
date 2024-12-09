document.addEventListener('DOMContentLoaded', () => {
    // Enhanced Vinyl Collection Data with Spotify Track IDs
    const vinylCollection = [
        {
            artist: "Depeche Mode", 
            album: "Memento Mori", 
            coverImage: "images/memento-mori.jpg", 
            spotifyTrackId: "4ZFIkAVwQYnmfxXQI1yEl0?si=7ad18b46b55546a0"
        },
        {
            artist: "Depeche Mode", 
            album: "Playing the Angel", 
            coverImage: "images/playing-the-angel.jpg", 
            spotifyTrackId: "6o7sC48NQwaTIMFpo3OjCz?si=02989e72b90249bb"
        },
        {
            artist: "Depeche Mode", 
            album: "Songs of Faith and Devotion", 
            coverImage: "images/songs-of-faith-and-devotion.jpg", 
            spotifyTrackId: "3qj2xGVJ7Sr4ISDPP5WVXy?si=38e0f9f24b264976"
        },
        {
            artist: "Dooz Kawa", 
            album: "Bohemian Rap Story", 
            coverImage: "images/bohemian-rap-story.jpg", 
            spotifyTrackId: "7Dg6YSfLTADFX1t0Nszy5B?si=cabc55b6bf8f42ea"
        },
        {
            artist: "Simony", 
            album: "ORIGINES : Euphoria", 
            coverImage: "images/origines-euphoria.jpg", 
            spotifyTrackId: "56qHBrzV0PEDyeAwVNPS8A?si=1a32ca464a5144cf"
        },
        { 
            artist: "Linkin Park", 
            album: "From Zero", 
            coverImage: "images/from-zero.jpg", 
            spotifyTrackId: "1EDPVGbyPKJPeGqATwXZvN?si=322f683df1cb4f6c"
        },
        { 
            artist: "Davodka", 
            album: "Héritage", 
            coverImage: "images/heritage.jpg", 
            spotifyTrackId: "5WQ8gMAn4H79EIh8RY5Egw?si=3594a2b73d6f4a6e"
        },
        { 
            artist: "Oasis", 
            album: "Definitely Maybe", 
            coverImage: "images/definitely-maybe.jpg", 
            spotifyTrackId: "6BbILdQ9XCDwuCI7UglcVy?si=1443baa305b84b71"
        },
        { 
            artist: "KIK", 
            album: "Adieu", 
            coverImage: "images/adieu.jpg", 
            spotifyTrackId: "3rrpjOZv9lJ0hDVh7TMBOS?si=d4ef71d94eea47ca"
        },
        { 
            artist: "KIK", 
            album: "Puzzle", 
            coverImage: "images/puzzle.jpg", 
            spotifyTrackId: "3gmmdCZ7MjjEu4QCgUGzXk?si=8ac1f23e96f844e4"
        },
        { 
            artist: "KIK", 
            album: "Rubi", 
            coverImage: "images/rubi.jpg", 
            spotifyTrackId: "2HCyZ4QicGE2el0lUSPGEU?si=b96e39cf02ce4e72"
        },
        { 
            artist: "Nirvana", 
            album: "Nevermind", 
            coverImage: "images/nevermind.jpg", 
            spotifyTrackId: "2RsAajgo0g7bMCHxwH3Sk0?si=3b34a98fee8e464c"
        },
        {
            artist: "Nirvana",
            album: "In Utero",
            coverImage: "images/in-utero.jpg",
            spotifyTrackId : "66w5OYw2ja8lnmaA3Ns0PU?si=a19efd1875a54fed"
        },
        { 
            artist: "Pink Floyd", 
            album: "Dark Side of The Moon", 
            coverImage: "images/dark-side-of-the-moon.png", 
            spotifyTrackId: "7Gx2q0ueNwvDp2BOZYGCMO?si=d7b24f41bb354960"
        },
        { 
            artist: "Mac Miller", 
            album: "Good AM", 
            coverImage: "images/good-am.jpg", 
            spotifyTrackId: "7rdyAfIm1t6h6I1gyLtD17?si=e621481f026e4ea1"
        }
    ];

    // Sort vinyl collection alphabetically by artist
    const sortedCollection = vinylCollection.sort((a, b) => a.artist.localeCompare(b.artist));

    const collectionGrid = document.getElementById('collection-grid');
    const searchInput = document.getElementById('search-input');

    // Function to create Spotify preview modal
    function createSpotifyPreviewModal(trackId) {
        const modal = document.createElement('div');
        modal.classList.add('spotify-preview-modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <iframe 
                    src="https://open.spotify.com/embed/track/${trackId}" 
                    width="300" 
                    height="380" 
                    frameborder="0" 
                    allowtransparency="true" 
                    allow="encrypted-media">
                </iframe>
            </div>
        `;

        // Close modal functionality
        modal.querySelector('.close-modal').addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });

        return modal;
    }

    // Function to render vinyl collection
    function renderCollection(collection) {
        collectionGrid.innerHTML = ''; // Clear existing grid

        collection.forEach((vinyl) => {
            const vinylCard = document.createElement('div');
            vinylCard.classList.add('vinyl-card');
            vinylCard.innerHTML = `
                <img src="${vinyl.coverImage}" alt="${vinyl.album} album cover" loading="lazy">
                <div class="vinyl-details">
                    <h3>${vinyl.album}</h3>
                    <p>${vinyl.artist}</p>
                    ${vinyl.spotifyTrackId ? 
                        `<button class="preview-btn" data-track-id="${vinyl.spotifyTrackId}">
                            Écouter un extrait
                        </button>` : 
                        ''
                    }
                </div>
            `;

            // Add preview button event listener
            if (vinyl.spotifyTrackId) {
                vinylCard.querySelector('.preview-btn').addEventListener('click', (e) => {
                    const trackId = e.target.dataset.trackId;
                    const previewModal = createSpotifyPreviewModal(trackId);
                    document.body.appendChild(previewModal);
                });
            }

            collectionGrid.appendChild(vinylCard);
        });

        // Setup scroll reveal after rendering
        setupScrollReveal();
    }

    // Existing scroll reveal and search functionality...
    function setupScrollReveal() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('.vinyl-card').forEach(card => {
            card.style.transitionDelay = `${Math.random() * 0.3}s`;
            observer.observe(card);
        });
    }

    // Initial render of sorted collection
    renderCollection(sortedCollection);

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredCollection = sortedCollection.filter(vinyl => 
            vinyl.artist.toLowerCase().includes(searchTerm) || 
            vinyl.album.toLowerCase().includes(searchTerm)
        );
        renderCollection(filteredCollection);
    });
});