function NotFound(){
    return(
        <>
            <div className="Mainbox flex justify-center items-center flex-col h-screen w-screen">
                <div className="headline w-[70%] h-[10%] flex justify-center items-end text-2xl p-2 "><span className="font-bold">404!</span>Page Not Found</div>
                <div className="contentbox w-[70%] h-[30%] flex justify-center text-xl">The page you're looking for isn't found. Try correct url</div>
            </div>
        </>
    );
}
export default NotFound;