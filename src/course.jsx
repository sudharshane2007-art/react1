
import productImg from './images.jpg'
const Course1 = "HTML"
function Course() 
{
 
    
  return (
  <div className="card">  
  <div className="center-text">
  <img src={productImg} alt="Product" width={150} height={130} border={1} />
  <h2>Product Title</h2>
  <p>This is the product description text.</p>
  <button>Buy Now</button>
</div>
</div>

  );
}
export default Course