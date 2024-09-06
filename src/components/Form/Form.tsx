function Form() {
    return (
        <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-text">First name</label>
                    <input type="text" id="first_name" className="bg-background-50 border border-secondary text-text text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required />
                </div>
                <div>
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:white">Last name</label>
                    <input type="text" id="last_name" className="bg-background-50 border border-secondary text-text text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe" required />
                </div>
                <div>
                    <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 text-text">Company</label>
                    <input type="text" id="company" className="bg-background-50 border border-secondary text-text text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Flowbite" required />
                </div>
                <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 text-text">Phone number</label>
                    <input type="tel" id="phone" className="bg-background-50 border border-secondary text-text text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                </div>
                <div>
                    <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 text-text">Website URL</label>
                    <input type="url" id="website" className="bg-background-50 border border-secondary text-text text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="flowbite.com" required />
                </div>
                <div>
                    <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 text-text">Unique visitors (per month)</label>
                    <input type="number" id="visitors" className="bg-background-50 border border-secondary text-text text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" required />
                </div>
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 text-text">Email address</label>
                <input type="email" id="email" className="bg-background-50 border border-secondary text-text text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" required />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 text-text">Password</label>
                <input type="password" id="password" className="bg-background-50 border border-secondary text-text text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required />
            </div>
            <div className="mb-6">
                <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 text-text">Confirm password</label>
                <input type="password" id="confirm_password" className="bg-background-50 border border-secondary text-text text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required />
            </div>
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    );
}

export default Form;