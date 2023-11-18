const Footer = () => {
  return (
    <footer className="bg-slate-800 pb-8 pt-16 mt-[5%]  border-gray-200 text-white">
      <div className="container mx-auto flex flex-col items-center gap-8 md:gap-16">
        <div className="lg:grid lg:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="text-2xl font-semibold mb-2">About Us</h4>
            <p>
              This website was made by Kadin V & Paul T. We created it out of
              the desire to expand our knowledge and challenge ourselves with
              understanding the mechanics of a Authentication system & a Cart
              System. Both were big challenges but we are happy with the result.
              Hope you like our website! 😊
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-2">Contact Us</h4>
            <p>Email: info@example.com</p>
            <p>
              Phone: <a href="tel:+12034567890">+0123456789</a>
            </p>
            <div className="flex justify-center mt-4 gap-4">
              <img src="/icons/facebook.png" alt="" className="w-6" />
              <img src="/icons/instagram.png" alt="" className="w-6" />
              <img src="/icons/twitter.png" alt="" className="w-6" />
              <img src="/icons/linkedin.png" alt="" className="w-6" />
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-2">Locations</h4>
            <p>
              Auckland: <a href="tel:+12034567890">+0123456789</a>
            </p>
            <p>
              Wellington: <a href="tel:+12034567890">+0123456789</a>
            </p>
            <p>
              Christchurch: <a href="tel:+12034567890">+0123456789</a>
            </p>
          </div>
        </div>
        <div className="text-center text-sm mt-8">
          <p>© 2023 Tailored Tails. All rights reserved.</p>
          <p>Created by Kadin V & Paul T</p>
          <p className="text-xs">Images from FreekPik, Unsplash & Imagine</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
