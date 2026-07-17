import styles from './course.module.css'
const Course1 = "HTML"
function Course() 
{
  return (
    <div className="card center-text">
    <div className={styles.card}>
        <img src="https://www.w3schools.com/html/pic_html.jpg" alt="HTML" />
      <h2>HTML</h2>
      <h3>{Course1}</h3>
      <p>Course description goes here.</p>
    </div>
    </div>
  );
}
export default Course