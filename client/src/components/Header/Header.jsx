import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-content absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw]'>
                <h2 className='text-white'>Order your food here</h2>
                <p className='text-white'>Choose from a diverse menu featuring a delectable array of dishes made with finest ingrediants to satisfy your cravings and elevate your dining experience,one delicious food at a time</p>
                <button>View Menu</button>
            </div>
        </div>
    );
};

export default Header;