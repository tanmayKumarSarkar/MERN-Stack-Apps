import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';



class Recipes extends React.Component{

    componentDidMount (){
        $('[data-toggle="title"]').tooltip();
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                {
                        this.props.recipes.map ((recipe) => {
                            return (
                            <div key={recipe.recipe_id} className="col-md-4" style={{marginBottom: "2rem"}}>
                                <div className="recipes__box">

                                    <img 
                                        className="recipe__box-img" 
                                        src={recipe.image_url} 
                                        alt={recipe.title}/>
                                    <div className="recipe__text">
                                        <h5 className="recipes__title" data-toggle="title" title={recipe.title} >
                                        {
                                            recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...`
                                        }
                                        </h5>
                                        <p className="recipes__subtitle">Publisher: <span>{recipe.publisher}</span></p>
                                    </div>  
                                    <button className="recipe_buttons">
                                        <Link to={{
                                            pathname: `/recipe/${recipe.recipe_id}`,
                                            recipe
                                        }} > View Receipe </Link>
                                    </button>

                                </div>
                            </div>
                            )
                        })
                    }
                </div>        
            </div>
        );
    }
}
export default Recipes;