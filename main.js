const courseList = document.getElementById("courseList");

const searchInput = document.getElementById("searchInput");

const filterCategory = document.getElementById("filterCategory");

function displayCourses(data){

    if(!courseList) return;

    courseList.innerHTML = "";

    data.forEach(course => {

        courseList.innerHTML += `

        <div class="col-md-4 mb-4">

            <div class="card h-100 shadow">

                <img
                    src="${course.image}"
                    class="card-img-top"
                    alt="${course.title}"
                >

                <div class="card-body">

                    <h5 class="card-title">
                        ${course.title}
                    </h5>

                    <p>
                        ${course.description}
                    </p>

                    <p>
                        <strong>Danh mục:</strong>
                        ${course.category}
                    </p>

                    <p>
                        <strong>Ngày:</strong>
                        ${course.date}
                    </p>

                    <button
                        class="btn btn-primary"
                        onclick="showDetail(${course.id})">

                        Xem chi tiết

                    </button>

                </div>

            </div>

        </div>

        `;

    });

}

function showDetail(id){

    const course =
    courses.find(item => item.id === id);

    document.getElementById("modalTitle").innerText =
    course.title;

    document.getElementById("modalContent").innerHTML = `
        <strong>Danh mục:</strong> ${course.category}<br>
        <strong>Trình độ:</strong> ${course.level}<br>
        <strong>Ngày:</strong> ${course.date}<br>
        <strong>Địa điểm:</strong> Phòng A21<br><br>
        ${course.detail}
    `;

    document.getElementById("modalImage").src =
    course.image;

    const modal =
    new bootstrap.Modal(
        document.getElementById("detailModal")
    );

    modal.show();

}

if(courseList){

    displayCourses(courses);

}

if(searchInput){

    searchInput.addEventListener("input", filterData);

}

if(filterCategory){

    filterCategory.addEventListener("change", filterData);

}

function filterData(){

    const keyword =
        searchInput.value.toLowerCase();

    const category =
        filterCategory.value;

    const result = courses.filter(course => {

        const matchName =
            course.title
            .toLowerCase()
            .includes(keyword);

        const matchCategory =
            category === "all"
            ||
            course.category === category;

        return matchName && matchCategory;

    });

    displayCourses(result);

}