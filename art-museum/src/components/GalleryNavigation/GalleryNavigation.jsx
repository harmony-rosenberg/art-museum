import { NavLink } from "react-router-dom";

function GalleryNavigation({ galleries }) {
	return (
		<nav>
			<h1>Galleries</h1>
			{galleries.map(gallery =>
			<NavLink key={gallery.id} to={`${gallery.id}`}> {gallery.name}
			</NavLink>)}
		</nav>
	)
}

export default GalleryNavigation;
