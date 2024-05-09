import { NavLink } from "react-router-dom";
// console.log('TEST ==>', gallery.galleryid)

const GalleryNavigation = ({galleries}) => {

	let galleryId = galleries.map(gallery => {
		
	gallery.galleryid
	})

	return (
		<nav>
			<h1>Galleries</h1>
			<NavLink
			to={galleryId}
			// className={}
			> gallery {galleryId} </NavLink>
		</nav>
)
}


export default GalleryNavigation;
