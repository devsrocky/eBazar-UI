import { useEffect, useRef, useState } from "react";
import { Button, CloseButton, Col, FormCheck} from "react-bootstrap";
import { FilterLeft, StarFill } from "react-bootstrap-icons";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import ProductStore from "../../store/ProductStore";

const Filter = () => {

      const FilterHandlerRef = useRef()
      const [range, setRange] = useState([50, 10000])
      const [selectedCategory, setSelectedCategory] = useState(null);
      const [selectBrand, setSelectedBrand] = useState(null);
      const  {CategoryList, BrandList} = ProductStore();
      const [Filter, setFilter] = useState({categoryID: "",brandID: "",minPrice: "",maxPrice: ""});
      const { ProductListRequestByFilter } = ProductStore()
      const valueChange = (name, id) => {
        setFilter((data) => ({
            ...data,
            [name]: id
        }))
      }

    const handleSelect = (categoryID) => {
        setSelectedCategory(categoryID);
    };
    const handleSelectBrand = (brands) => {
        setSelectedBrand(brands);
    };
    const FilterMenu = () => {
      let filter = FilterHandlerRef.current;
      filter.classList.toggle('filter-settings-active')
    }

    useEffect(() => {
      (async () => {

        let isEmptyFilter = Object.values(Filter).every(value => value === "");
        !isEmptyFilter ? await ProductListRequestByFilter(Filter) : null

      })()
    }, [Filter])

    return (
        <section className="position-relative">
        <Col className="filter-control">
          <div className="d-flex justify-content-between my-4">
            <button onClick={FilterMenu} className="filter-btn"><FilterLeft size={25}/> <span>Filter</span> </button>
            <select className="select-option">
              <option value="">Default sorting</option>
              <option value="discount">Discount</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
          </div>
        </Col>

        <div ref={FilterHandlerRef} className="filter-settings">
        <span onClick={FilterMenu} size={50} className="filter-close-btn d-lg-none">✕</span>
            <div className="filter-block pb-3 mb-4">
              <h4 className="filter-title py-3 px-3">Shop by price range</h4>
              <div className="px-3 mt-4">
                  <RangeSlider 
                    min={50}
                    max={10000}
                    value={range}
                    onInput={(newRange) => {
                      setRange(newRange);
                      setFilter((prev) => ({
                        ...prev,
                        minPrice: newRange[0],
                        maxPrice: newRange[1],
                      }));
                    }}
                    className="custom-range"
                  />
                  <div className="filter-range-content">
                    <span>Min: {range[0]}</span> — <span>Max: {range[1]}</span>
                  </div>
              </div>
            </div>

            <div className="filter-block pb-3 mb-4">
              <h4 className="filter-title py-3 px-3">Shop by category</h4>
              <ul className="px-3">
                {CategoryList?.map((item, index) => (
                  <li key={index.toString()}>
                    <label  className="d-flex align-items-center gap-2 cursor-pointer" onChange={() => valueChange('categoryID', item['_id'])}  onClick={() => handleSelect(item['_id'])} >
                      <FormCheck type="checkbox" checked={selectedCategory === item['_id']} className="filter-checkbox" readOnly />
                      <span>{item['categoryName']}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="filter-block pb-3  mb-4">
              <h4 className="filter-title py-3 px-3">Brands</h4>
              <ul className="px-3">
                {BrandList?.map((item, index) => (
                  <li key={index.toString()}>
                    <label  className="d-flex align-items-center gap-2 cursor-pointer" onChange={() => valueChange('brandID', item['_id'])}  onClick={() => handleSelectBrand(item['brandName'])} >
                      <FormCheck type="checkbox" checked={selectBrand === item['brandName']} className="filter-checkbox" readOnly />
                      <span>{item['brandName']}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="filter-block pb-3">
              <h4 className="filter-title py-3 px-3">Avarage rating</h4>
              <ul className="px-3">
                <li className="d-flex justify-content-between">
                  <div className="d-flex gap-1">
                    {
                      Array.from({length: 5}).map((_, index) => {
                        return (
                            <StarFill size={14}
                              key={index.toString()} 
                              className={index < 5 ? "rated-str" : "blank-str"}
                            />
                        )
                      })
                    }
                  </div>
                  <span>(23)</span>
                </li>
                <li className="d-flex justify-content-between">
                  <div className="d-flex gap-1">
                    {
                      Array.from({length: 5}).map((_, index) => {
                        return (
                            <StarFill size={14}
                              key={index.toString()} 
                              className={index < 4 ? "rated-str" : "blank-str"}
                            />
                        )
                      })
                    }
                  </div>
                  <span>(13)</span>
                </li>

                <li className="d-flex justify-content-between">
                  <div className="d-flex gap-1">
                    {
                      Array.from({length: 5}).map((_, index) => {
                        return (
                            <StarFill size={14}
                              key={index.toString()} 
                              className={index < 3 ? "rated-str" : "blank-str"}
                            />
                        )
                      })
                    }
                  </div>
                  <span>(07)</span>
                </li>

                <li className="d-flex justify-content-between">
                  <div className="d-flex gap-1">
                    {
                      Array.from({length: 5}).map((_, index) => {
                        return (
                            <StarFill size={14}
                              key={index.toString()} 
                              className={index < 2 ? "rated-str" : "blank-str"}
                            />
                        )
                      })
                    }
                  </div>
                  <span>(03)</span>
                </li>

                <li className="d-flex justify-content-between">
                  <div className="d-flex gap-1">
                    {
                      Array.from({length: 5}).map((_, index) => {
                        return (
                            <StarFill size={14}
                              key={index.toString()} 
                              className={index < 1 ? "rated-str" : "blank-str"}
                            />
                        )
                      })
                    }
                  </div>
                  <span>(01)</span>
                </li>
              </ul>
            </div>


          </div>
        </section>
    );
};

export default Filter;