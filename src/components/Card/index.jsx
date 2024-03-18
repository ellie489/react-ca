export default function Card(props) {
    const { title, image, price } = props;
    return (
        <div>
            <h2>{title}</h2>
            <img src={image} alt="" />
            {/* Remember to check with the API where to put the image .src/url.  */}
            <div>Price: {price},-</div>
        </div>
    )
}