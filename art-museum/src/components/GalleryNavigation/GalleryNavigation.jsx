import React from 'react'; //added
import { NavLink } from "react-router-dom";
// console.log('TEST ==>', gallery.galleryid)

function GalleryNavigation({ galleries }) {

	// let galleryId = galleries.map(gallery => {
	// 	<ul>
	// 		{gallery.galleryid}

	// 	</ul>
	// })

	return (
		<nav> <>
			<h1>Galleries</h1>
			{galleries.map(gallery => <NavLink to={`${gallery.id}`}> {gallery.name} </NavLink>)}
			<NavLink to='/'>HOME</NavLink>

		</>
		</nav>
	)
}


export default GalleryNavigation;
