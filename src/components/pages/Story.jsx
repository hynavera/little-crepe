import React from 'react'
import "./pages.css"

const Story = () => {
  return (
    <div className='sub-page wide'>
      <div className="page-head row">
          <div className="col l-10">
            <h1>About Crêpe</h1>
          </div>
      </div>
      <div className="row">
        <div className='story-about col l-6 p-4'>
          <p>
             Crêpes are usually one of two varieties: sweet crêpes (crêpes sucrées) or savoury galettes (crêpes salées). They are often served with a wide variety of fillings such as cheese, fruit, vegetables, meats, and a variety of spreads. Crêpes can also be flambéed, such as in crêpes Suzette.           
          </p>
          <br />
          <p>
            Sweet crêpes are generally made with wheat flour (farine de blé). When sweet, they can be eaten as part of breakfast or as a dessert. Savory crêpes can be made with non-wheat flours such as buckwheat. A normal savory crêpe recipe includes using wheat flour but omitting the sugar.
          </p>
          <br />
          <p>
            The standard recipe for French crêpe calls for flour, eggs, milk, salt, and butter. Sugar is optional. In the industrial production of crêpes, the dry ingredients are combined with eggs to form a dough. The rest of the wet ingredients are then added to thin the batter to a loose enough consistency to spread easily. The batter is added, one ladle at a time, to a hot, greased pan, cooked until golden, then flipped. Crêpe batter is characterized by its liquidity, making it easy to spread in a thin layer. Crêpes are also characterized by their quick cooking time, usually 20–30 seconds per side.
          </p>
        </div>
        <div className="story-img-contain col l-0-1 l-5 p-4">
          <div className="story-img">
            <img src="https://cdn.pixabay.com/photo/2024/01/20/12/31/ai-generated-8520996_1280.png" alt=''/>
          </div>
        </div>
      </div>

      <div className="page-head row">
        <div className="col l-10">
          <h1>Our Experiences</h1>
        </div>
      </div>
      <div className="row">
        <div className='story-about col l-6 p-4'>
          <p>
            The standard recipe for French crêpe calls for flour, eggs, milk, salt, and butter. Sugar is optional. In the industrial production of crêpes, the dry ingredients are combined with eggs to form a dough. The rest of the wet ingredients are then added to thin the batter to a loose enough consistency to spread easily. The batter is added, one ladle at a time, to a hot, greased pan, cooked until golden, then flipped. Crêpe batter is characterized by its liquidity, making it easy to spread in a thin layer. Crêpes are also characterized by their quick cooking time, usually 20–30 seconds per side.
          </p>
        </div>
        <div className="story-img-contain col l-0-1 l-5 p-4">
          <div className="story-img">
            <img src="https://cdn.pixabay.com/photo/2024/01/20/12/31/ai-generated-8520996_1280.png" alt=''/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Story