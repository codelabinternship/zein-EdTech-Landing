FROM node:20

# 2. Set the working directory inside the container
WORKDIR /usr/src/nextjs-app

# 3. Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

# 4. Install dependencies (including Next.js)
RUN npm install --force

# 5. Copy the rest of your application code to the container
COPY . .

# 6. Build Next.js application (production build)
RUN npm run build

# 7. Expose the port your app will run on
EXPOSE 3000

# 8. Run the application
CMD ["npm", "start"]
