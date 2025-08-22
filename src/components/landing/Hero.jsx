import React, {useEffect, useState, useRef} from 'react'
import "./Landing.css"
const Hero = () => {
  const [menu, setMenu] = useState(1);
  const handleSetMenu1 = () => {
    setMenu(1);
  }
  const handleSetMenu2 = () => {
    setMenu(2);
  }
  const handleSetMenu3 = () => {
    setMenu(3);
  }

  const [currentMenu, setCurrentMenu] = useState(1);
  const prevMenuRef = useRef(1); // Use useRef to track the previous menu
  const imgRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMenu((prevMenu) => {
        if (prevMenu === 3) {
          return 1;
        } else {
          return prevMenu + 1;
        }
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentMenu !== prevMenuRef.current) {
      prevMenuRef.current = currentMenu;

      if (imgRef.current) {
        imgRef.current.classList.remove('hero-img-animation-1', 'hero-img-animation-2', 'hero-img-animation-3', 'active'); // Remove all classes
        imgRef.current.classList.add(`hero-img-animation-${currentMenu}`); 
      }

      setTimeout(() => {
        if (imgRef.current) {
          imgRef.current.classList.add('active'); 
        }
        setMenu(currentMenu); 
      }, 500); 
    }
  }, [currentMenu]);

  return (
    <div className="hero">
          <div className="hero-background"></div>

    <section className="wide">
      <div className="row">
        <div className="col l-6 p-4 hero-img">
          <img 
            src={menu === 1 
              ? "" 
              : menu === 2 
                ? "" 
                : "" 
            } 
            ref={imgRef}
          />
          {/* {menu === 1 &&
            <img src="" alt="" />
          }
          {menu === 2 &&
            <img src="" alt="" />
          }
          {menu === 3 &&
            <img src="" alt="" />
          } */}
        </div>
        <div className="col l-0-1 l-4 p-3 hero-menu">
          {menu === 1 && <>
            <h4>DAY</h4>
            <h1>sweets</h1>
            <p>Enjoy 
            </p>
          </>}
          {menu === 2 && <>
            <h4>DAY</h4>
            <h1>Traditional </h1>
            <p>Enjoy 
            </p>
          </>}
          {menu === 3 && <>
            <h4>FULL</h4>
            <h1>more dressings</h1>
            <p>Enjoy 
            </p>
          </>}
          <div className="row hero-circle-row">
            <div className="hero-circle" onClick={handleSetMenu1}>
              <img src="" alt="" 
                className={`herobtn ${menu === 1 ? 'active' : ''}`}
              />
            </div>
            <div className="hero-circle" onClick={handleSetMenu2}>
              <img src="" alt="" 
                className={`herobtn ${menu === 2 ? 'active' : ''}`}
              />
            </div>
            <div className="hero-circle" onClick={handleSetMenu3}>
              <img src="" alt="" 
                className={`herobtn ${menu === 3 ? 'active' : ''}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Hero