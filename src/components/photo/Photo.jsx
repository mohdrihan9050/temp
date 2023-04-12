import './Photo.css'
import img0 from '../../img/img1/img0p.jpg';
import img1 from '../../img/img1/img1p.jpg';
import img2 from '../../img/img1/img2p.jpg';
import img3 from '../../img/img1/img3p.jpg';
import img4 from '../../img/img1/img4p.jpg';
import img5 from '../../img/img1/img5p.jpg';
import img6 from '../../img/img1/img6p.jpg';
import img7 from '../../img/img1/img7p.jpg';
import img8 from '../../img/img1/img8p.jpg';
import img9 from '../../img/img1/img9p.jpg';
import img10 from '../../img/img1/img10p.jpg';
import img11 from '../../img/img1/img11p.jpg';
import img12 from '../../img/img1/img12p.jpg';
import img15 from '../../img/img1/img15p.jpg';
import img13 from '../../img/img1/img13p.jpg';
import img14 from '../../img/img1/img14p.jpg';
import img16 from '../../img/img1/img16p.jpg';
import img17 from '../../img/img1/img17p.jpg';
import vidimg from '../../img/img1/vidimg.jpg';
import vidimg1 from '../../img/img1/vidimg1.jpg';
import vid1 from '../../img/img1/vid1.mp4';
import vid2 from '../../img/img1/vid2.mp4';

const Photo=()=>{
    return(
        <div className=''>
        <div className='container-fluid'>
          <h1 className='text-center text-info display-4 pt-3'>Way To Success..!</h1>
              <div className=" d-flex justify-content-center">
              <video width="320" height="300" controls poster={vidimg}>
                    <source src={vid2} type="video/mp4"/>
                </video>
                </div>
            <div className="mt-5 row gy-3">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                   <img className='img-fluid set-img-height w-100 img-thumbnail' data-aos="fade-up" src={img0}/>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                   <img className='img-fluid set-img-height w-100 img-thumbnail'  data-aos="fade-up" src={img1}/>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <img  className='img-fluid set-img-height w-100 img-thumbnail '  data-aos="fade-up" src={img2}/>
                </div>
            </div>

            <div className=" row mt-1 gy-3">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                   <img className='img-fluid set-img-height w-100 img-thumbnail'  data-aos="fade-up" src={img3}/>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                   <img className='img-fluid set-img-height w-100 img-thumbnail'  data-aos="fade-up" src={img4}/>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <img  className='img-fluid set-img-height w-100 img-thumbnail '  data-aos="fade-up" src={img5}/>
                </div>

            </div>

            <div className=" row mt-1  gy-3">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                   <img className='img-fluid set-img-height w-100 img-thumbnail'  data-aos="fade-up" src={img6}/>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                   <img className='img-fluid set-img-height w-100 img-thumbnail'  data-aos="fade-up" src={img7}/>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <img  className='img-fluid set-img-height w-100 img-thumbnail '  data-aos="fade-up" src={img8}/>
                </div>

            </div>

            <div className=" row mt-1  gy-3">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                   <img className='img-fluid set-img-height w-100 img-thumbnail'  data-aos="fade-up" src={img9}/>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                   <img className='img-fluid set-img-height w-100 img-thumbnail'  data-aos="fade-up" src={img10}/>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <img  className='img-fluid set-img-height w-100 img-thumbnail'  data-aos="fade-up" src={img11}/>
                </div>

            </div>
            <div className=" row mt-1  gy-3">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                   <img className='img-fluid set-img-height w-100 img-thumbnail'  data-aos="fade-up" src={img12}/>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                   <img className='img-fluid set-img-height w-100 img-thumbnail'  data-aos="fade-up" src={img13}/>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <img  className='img-fluid set-img-height w-100 img-thumbnail '  data-aos="fade-up" src={img14}/>
                </div>

            </div>
            <div className=" d-flex justify-content-center">
              <video width="320" height="300" controls poster={vidimg1}>
                    <source src={vid1} type="video/mp4"/>
                </video>
                </div>
            <div className=" row mt-1 mb-3 gy-3">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                   <img className='img-fluid set-img-height w-100 img-thumbnail'  data-aos="fade-up" src={img15}/>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                   <img className='img-fluid set-img-height w-100 img-thumbnail'  data-aos="fade-up" src={img16}/>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <img  className='img-fluid set-img-height w-100 img-thumbnail '  data-aos="fade-up" src={img17}/>
                </div>

            </div>
            </div>

            <div className='text-content  '>
                <div className='text-content-inner p-3'>
                <p className=''>
                No matters where you are in this entire planet, No matter what you are doing.<br/>
                Salah can never be compromised because that's the only thing that distinguish between us and the non-believers.
                </p>
                <p>
                Prophet Muhammad <span className='display-6'>ﷺ</span> peace be upon him said the difference between us and the kaafirs is that of a salah and whoever abandons Salah has commits kufr.
                </p>
                <p> Salah is like a proof  of our imaan now that does not mean our imaan has to be at his highest from all the times because our imaan constantly changing but you know what can not be changed!?  our consistency with Salah <mark><span className='remove-opacity'>because that's the only thing that's going to light up your life you know we spend so much of our time chasing the success of duniya yet our souls are still empty but when the creator call us 5X times a day for success we decline his call ask yourself this question what is more important!? 
                Your definition of success or ALLAH's definition of success you know what were the last word of our Prophet Muhammad <span className='display-6 '>ﷺ</span> peace be upon he was in his deathbed he was about to deport from this planet he was in extreme pain but you know what he kept saying My Ummah! SALAH SALAH SALAH</span></mark><br/> he was still concerned About our Salah.
                </p>
                <p>
                This is the importance of Salah.    
                </p>
                </div>

            </div>

        </div>
    )
}
export default Photo;