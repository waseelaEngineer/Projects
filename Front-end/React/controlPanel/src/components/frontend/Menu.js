import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import swal from 'sweetalert';
import Navbar from '../../layouts/frontend/Navbar'
import loadingImg from '../../assets/frontend/images/gif.gif'
import QRCode from 'qrcode'

export default function Menu() {

    const { url } = useParams();
    const [categorys, setCategorys] = useState([]);
    const [products, setProducts] = useState([]);
    const [resturant, setResturant] = useState({ layout: 'en' });
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [viewProduct, setViewProduct] = useState('');
    const [cart, setCart] = useState([]);
    const [checkout, setCheckout] = useState(false);
    const [variants, setVariants] = useState([]);
    const [assignAddons, setAssignAddons] = useState([]);
    const [branches, setBranches] = useState([]);
    const [variantPrice, setVariantPrice] = useState(0);
    const [addonPrice, setAddonPrice] = useState(0);
    const [src, setSrc] = useState('');
    const [addons, setAddons] = useState([]);
    let orders = '';
    let text = '';
    let register = '';

    let price = 0;
    cart.forEach(item => {
        price += (parseInt(products.filter(product => product.id === item.id)[0].price) + item.additionalPrice) * item.qty;
    })

    if (resturant.layout === 'ar') {
        cart.map(item => {
            let addonsStr = '';
            item.addons.forEach(addon => addonsStr += ` + ${addon}`)
            products.filter(product => product.id === item.id).map(product => {
                orders += `${product.name} ${item.variant} ${(addonsStr)} = ${parseInt(product.price) + item.additionalPrice} ${resturant.currency} * ${item.qty} كمية\n\n`
            })
        })
        text = encodeURIComponent(`مرحبا, اود تقديم طلب\n\n\n${orders}\nإجمالي السعر: ${price} ${resturant.currency}\n\nبينما تنتظر الرد من المطعم يمكنك تفقد المطاعم الاخرى من خلال الرابط التالي:\n\n\nhttps://waseela.online`);
        register = encodeURIComponent(`مرحبا, اود التسجيل`)
    }
    else {
        cart.map(item => {
            let addonsStr = '';
            item.addons.forEach(addon => addonsStr += ` + ${addon}`)
            products.filter(product => product.id === item.id).map(product => {
                orders += `${product.name} ${item.variant} ${(addonsStr)} = ${parseInt(product.price) + item.additionalPrice} ${resturant.currency}  x  ${item.qty}\n\n`
            })
        })
        text = encodeURIComponent(`Hi, I would like to place an order\n\n\n${orders}\nTotal price: ${price} ${resturant.currency}\n\nWhile waiting for the resturant to respond, You can check other resturants at:\n\n\nhttps://waseela.online`);
        register = encodeURIComponent(`Hi, I would like to register`)
    }

    useEffect(() => {
        fetchData()
    }, []);
    useEffect(() => {
        QRCode.toDataURL(`https://waseela.online/${url}/menu`).then((setSrc));
    }, []);

    function increaseQuantity() {
        setQuantity(quantity + 1);
    }

    function decreaseQuantity() {
        quantity > 1 && setQuantity(quantity - 1);
    }

    function exitPopup() {
        setAddonPrice(0)
        setVariantPrice(0);
        setQuantity(1);
        setViewProduct('');
    }

    function addToCart() {

        setCart([...cart, {
            id: viewProduct,
            qty: quantity,
            additionalPrice: variantPrice + addonPrice,
            variant: variants.filter(variant => parseInt(variant.product_id) === viewProduct).length === 0 ? '' : variants.filter(variant => parseInt(variant.price) === variantPrice && parseInt(variant.product_id) === viewProduct)[0].name,
            addons: addons,
        }]);
        setAddonPrice(0)
        setVariantPrice(0);
        setQuantity(1);
        setViewProduct('');
        setAddons([]);
    }

    function deleteFromCart(idx) {
        setCart(cart.filter(item => cart.indexOf(item) !== idx));
        cart.length === 1 && setCheckout(false);
    }

    function sendOrder() {
        const data = {
            resturant_url: url,
            price: price,
            currency: resturant.currency,
        }
        axios.post(`/api/add-order`, data)
    }

    function whatsappBtn() {
        if (branches.length === 1) {
            sendOrder();
            window.open(`https://wa.me/${branches[0].phone}?text=${text}`);
        }
        else {
            setCheckout('branch')
        }
    }

    function chooseBranch(branch) {
        sendOrder();
        window.open(`https://wa.me/${branch.phone}?text=${text}`);
    }

    function addonCheckbox(e, price, name) {

        if (e.currentTarget.checked) {
            setAddonPrice(addonPrice + price);
            setAddons([...addons, name]);
        }
        else {
            setAddonPrice(addonPrice - price);
            setAddons(addons.filter(addon => addon !== name));
        }
    }

    function fetchData() {
        axios.get(`/api/view-category/${url}`).then(res => {
            if (res.data.status === 200) {
                setCategorys(res.data.category)
            }
        });

        axios.get(`/api/view-product/${url}`).then(res => {
            if (res.data.status === 200) {
                setProducts(res.data.products);
            }
        });

        axios.get(`/api/show-resturant/${url}`).then(res => {
            if (res.data.status === 200) {
                setResturant(res.data.resturant[0])
                setBranches(res.data.branches);
                setLoading(false);
            }
        });

        axios.get(`/api/view-variant/${url}`).then(res => {
            if (res.data.status === 200) {
                setVariants(res.data.variants);
            }
        });

        axios.get(`/api/view-assignaddons/${url}`).then(res => {
            if (res.data.status === 200) {
                setAssignAddons(res.data.assigns);
            }
        });
    };

    if (loading) {
        return <img src={loadingImg} className='gif' alt='loading' />
    }

    if (checkout === 'branch') {
        return <div className={`container popup ${resturant.layout === 'ar' && 'ar'}`}>
            <div className='card'>
                <div className='card-header d-flex justify-content-between align-items-center'>
                    <h4 className='pt-1'>{resturant.layout === 'ar' ? 'اختر الفرع' : 'Choose branch'}</h4>
                    <button className='btn btn-primary' onClick={() => setCheckout('checkout')}>{resturant.layout === 'ar' ? 'رجوع' : 'Back'}</button>
                </div>
                <div className='card-body d-flex flex-column gap-2'>
                    {branches.map((branch, idx) => <h4 key={idx} onClick={() => { chooseBranch(branch) }} className='border p-3 w-100 text-center pointer'>{branch.address}</h4>)}
                </div>
            </div>
        </div>
    }

    if (checkout === 'checkout') {
        return <div className={`container py-5 ${resturant.layout === 'ar' && 'ar'}`}>
            <div className='card'>
                <div className='card-header d-flex justify-content-between align-items-center'>
                    <h1>{resturant.layout === 'ar' ? 'الفاتورة' : 'Checkout'}</h1>
                    <button className='btn btn-primary' onClick={(() => setCheckout(false))}>{resturant.layout === 'ar' ? 'رجوع' : 'Back'}</button>
                </div>
                <div className='card-body'>
                    {cart.map((item, idx) => (
                        <div key={idx}>
                            {products.filter(product => product.id === item.id).map(product => (
                                <div key={product.id} className='overflow-auto'>
                                    <div className='d-flex gap-1 pt-2'>
                                        <h3>{product.name}</h3>
                                        <h3>{item.variant}</h3>
                                        {item.addons.map((addon, idx) => (
                                            <div key={idx} className='d-flex gap-1'>
                                                <h3>+</h3>
                                                <h3>{addon}</h3>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='border-bottom d-flex gap-2 justify-content-between align-items-center py-3'>
                                        <img src={`https://server.waseela.online/${product.image}`} style={{ width: '80px', height: '80px', borderRadius: '10px' }} alt='image' />
                                        <div className='d-flex align-items-center gap-1 pt-3'>
                                            <h3>{item.qty}</h3>
                                            <h3>x</h3>
                                            <h3>{parseInt(product.price) + item.additionalPrice}</h3>
                                            <h5>{resturant !== '' && resturant.currency}</h5>
                                        </div>
                                        <button onClick={() => deleteFromCart(idx)} className='btn btn-danger mt-2'>{resturant.layout === 'ar' ? 'حذف' : 'Delete'}</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                    <div className='d-flex justify-content-between pt-3'>
                        <h1>{resturant.layout === 'ar' ? 'إجمالي السعر:' : 'Total price:'}</h1>
                        <div className='d-flex align-items-center gap-1 pt-1'>
                            <h1>{price}</h1>
                            <h5>{resturant !== '' && resturant.currency}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <a onClick={whatsappBtn} target="_blank" className='btn btn-success form-control mt-4 pt-3'>
                <h2>{resturant.layout === 'ar' ? 'إرسال الطلب عبر الواتس اب' : 'Send order by Whatsapp'}</h2>
            </a>
        </div>
    }

    return (
        <>
            <div className={`${viewProduct !== '' && 'blur'} ${resturant.layout === 'ar' && 'ar'}`}>
                {resturant !== '' && (
                    <div className='menu-header-container'>
                        <img className='header-img' src={`https://server.waseela.online/${resturant.header}`} alt='image' />
                        <div>
                            <img className='header-img' src={`https://server.waseela.online/${resturant.logo}`} alt='image' />
                        </div>
                    </div>
                )}
                <div className='container pb-5'>
                    {resturant !== '' && (
                        <div className='border-bottom mt-5'>
                            <h1 className="px-2"> {resturant.name}</h1>
                            <div className='d-flex gap-3'>
                                <p><i className="fa-solid fa-location-dot px-2"/> {branches[0].address}</p>
                                <p>|</p>
                                <p className='en'><i className="fa-solid fa-phone px-2"/> {branches[0].phone}</p>
                            </div>
                        </div>
                    )}
                    {categorys.filter(category => category.status === 'available').map(category => (

                        <div key={category.id} className='category-container'>
                            <h2 className='mt-4'>{category.name}</h2>

                            <div className='row'>
                                {products.filter(product => parseInt(product.category_id) === category.id && product.status === 'available').map(product => (
                                    <div key={product.id} className='col-sm-6 col-md-4 col-lg-3 pt-4'>

                                        <div onClick={() => setViewProduct(product.id)} className='card-parent'>
                                            <div className='card-image-container'>
                                                <img src={`https://server.waseela.online/${product.image}`} alt='image' />
                                            </div>

                                            <div className='card-details'>
                                                <h5>{product.name}</h5>
                                                <div className='d-flex gap-1'>
                                                    <h4>{product.price}</h4>
                                                    <h6 className='pt-1'>
                                                        {resturant !== '' && resturant.currency}
                                                    </h6>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className='d-flex justify-content-center text-center mt-5'>
                        <a className='decoration-none' href={src} download>
                            <img src={src} alt='QR' />
                            <p>{resturant.layout === 'ar' ? 'تحميل' : 'Download'}</p>
                        </a>
                    </div>

                </div>


                <footer className="py-4 bg-light mt-auto en">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; waseela 2022</div>
                            <div>
                                <a href={`https://wa.me/+249907812904?text=${register}`} target='_blank'>
                                    {resturant.layout === 'ar' ? 'سجل الان' : 'Register now'}
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            {/* cart button */}
            {cart.length !== 0 && (
                <div onClick={() => setCheckout('checkout')} className={`cart ${resturant.layout === 'ar' && 'cart-ar'}`}>
                    {cart.length}
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
            )}
            {/* cart div */}
            {viewProduct !== '' && products.filter(product => product.id === viewProduct).map(product => (

                <div key={product.id} className={`popup ${resturant.layout === 'ar' && 'ar'}`}>
                    <div className='card'>

                        <div className='card-header px-4 d-flex justify-content-between'>
                            <h4 className='pt-1'>{product.name}</h4>
                            <h4 className='pt-2'><i onClick={exitPopup} className="pointer fa-solid fa-xmark" /></h4>
                        </div>

                        <div className='card-body'>

                            <div className='row p-1'>


                                <div className='d-flex flex-column justify-content-between h-100'>
                                    <div className='scroll'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <img className='cart-img' src={`https://server.waseela.online/${product.image}`} alt='image' />
                                            <div className='d-flex gap-1'>
                                                <h4>{parseInt(product.price) + variantPrice + addonPrice}</h4>
                                                <h6 className='pt-1'>
                                                    {resturant !== '' && resturant.currency}
                                                </h6>
                                            </div>
                                        </div>
                                        {product.description !== 'null' && <h6>{product.description}</h6>}
                                        <div className='input-group en mt-4 mb-2'>
                                            <button onClick={() => { decreaseQuantity() }} className='input-group-text px-4'>-</button>
                                            <div className='form-control text-center'>{quantity}</div>
                                            <button onClick={() => { increaseQuantity() }} className='input-group-text px-4'>+</button>
                                        </div>
                                        {assignAddons.filter(assign => parseInt(assign.product_id) === product.id && assign.addon.status === 'available').map(assign => (
                                            <div key={assign.id} className='d-flex gap-4 py-2'>
                                                <input type='checkbox' id='x' className='' onChange={(e) => addonCheckbox(e, parseInt(assign.addon.price), assign.addon.name)} />
                                                <p className='my-auto'>{assign.addon.name} + {assign.addon.price} {resturant.currency}</p>
                                            </div>
                                        ))}
                                        <div className='variants-container pt-3'>
                                            {variants.filter(variant => parseInt(variant.product_id) === product.id).map(variant => (
                                                <h6 key={variant.id} onClick={() => setVariantPrice(parseInt(variant.price))} className={`variant pointer ${parseInt(variant.price) === variantPrice && 'variant-active'}`}>{variant.name}</h6>
                                            ))}
                                        </div>
                                    </div>
                                    <button onClick={addToCart} className='btn mt-3 btn-primary align-bottom'>{resturant.layout === 'ar' ? 'أضف الى السلة' : 'Add to cart'}</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}