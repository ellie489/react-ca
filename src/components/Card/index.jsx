export default function Card(props) {
    const { title, image, price } = props;
    return (
        <div>
            <h2>{title}</h2>
            <img src={image} alt="" />
            <div>Price: {price},-</div>
        </div>
    )
}