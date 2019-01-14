import React from 'react'

const Photos = ({name, number, photos, deletePhoto}) => {
    const photolist = photos.map(photo =>{
        return(
            <div className="photo-item" key={photo.id}>
                <div>Author: {photo.author}</div>
                <div>Name: {photo.name}</div>
                <button onClick={()=>{deletePhoto(photo.id)}}>Delete photo</button>
            </div>
        )
    });
    return (
        <div>
            <div>Photos of {name}</div>
            <div>{number} photos in collection</div>
            <div className="photo-list">
                {photolist}
            </div>
        </div>
    );
}

export default Photos