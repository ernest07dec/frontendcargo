// import about from "../assets/about/about-page.jpg";
import testimonial1 from "../assets/testimonials/t1.jpg";
import testimonial2 from "../assets/testimonials/t2.jpg";
import testimonial3 from "../assets/testimonials/t3.jpg";

export const About = () => {
  return (
    <div className="mt-20">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-5">
        {/* <img className="relative p-10" src={about} alt="about" /> */}
        {/* <p className="absolute z-10 ml-20 mt-20 text-2xl font-semibold">
          About | CarGo
        </p> */}
        <div className="p-10">
          <p>
            Welcome to our car rental company! We are dedicated to providing you
            with a comfortable, affordable, and hassle-free rental experience.
            Whether you're traveling for business or leisure, we've got you
            covered with a wide variety of vehicles to choose from. <br />
            <br />
            Our car rental company offers a diverse range of vehicles, including
            luxury cars, SUVs, vans, and pick-ups, to cater to your specific
            transportation needs. Our vehicles are well-maintained, reliable,
            and equipped with modern safety features to ensure your safety and
            comfort during your rental period. <br /> <br /> We understand that
            every customer has different transportation needs, which is why we
            offer flexible rental options, including short-term and long-term
            rentals. Our team of experienced professionals is dedicated to
            providing excellent customer service, and we work closely with our
            customers to understand their unique transportation requirements and
            provide them with tailor-made solutions that meet their needs.
            <br /> <br /> At our car rental company, we strive to provide our
            customers with cost-effective and efficient transportation services.
            We offer competitive pricing, transparent rental agreements, and
            24/7 customer support to ensure that you have a hassle-free rental
            experience from start to finish. <br /> <br /> So if you're looking
            for a reliable, affordable, and convenient car rental company for
            your next trip, look no further than us. Our commitment to customer
            satisfaction, coupled with our wide range of vehicles and flexible
            rental options, makes us the ideal choice for all your
            transportation needs.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-center text-3xl font-semibold text-primary">
          CarGo Organization
        </h2>
      </div>
      <div className="p-5">
        <div className="flex justify-center">
          <div class="w-full max-w-sm bg-white mt-10">
            <div class="flex flex-col items-center pb-10">
              <img
                class="w-32 rounded-full shadow-lg dark:shadow-black/20"
                src={testimonial1}
                alt="President"
              />
              <h5 class="mb-1 text-xl font-bold text-primary">MAV</h5>
              <span class="text-sm text-gray-500 dark:text-gray-600">
                President
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className="container my-24 mx-auto md:px-6">
            <section className="mb-32 text-center">
              <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
                <div className="mb-12 md:mb-0">
                  <div className="mb-6 flex justify-center">
                    <img
                      src={testimonial1}
                      className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                      alt=""
                    />
                  </div>
                  <h5 className="mb-2 text-lg font-bold">Maria Smantha</h5>
                  <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                    Web Developer
                  </h6>
                </div>
                <div className="mb-12 md:mb-0">
                  <div className="mb-6 flex justify-center">
                    <img
                      src={testimonial2}
                      className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                      alt=""
                    />
                  </div>
                  <h5 className="mb-2 text-lg font-bold">Lisa Cudrow</h5>
                  <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                    Graphic Designer
                  </h6>
                </div>
                <div className="mb-0">
                  <div className="mb-6 flex justify-center">
                    <img
                      src={testimonial3}
                      className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                      alt=""
                    />
                  </div>
                  <h5 className="mb-2 text-lg font-bold">John Smith</h5>
                  <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                    Marketing Specialist
                  </h6>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
