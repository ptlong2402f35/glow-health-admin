function functionStaffInfoNext(id) {
	const staffInfoWrap = document.querySelector(`.StaffInfoWrap_${id}`);
	if (staffInfoWrap) {
		staffInfoWrap.scrollBy({ left: 200, behavior: "smooth" });
	}
}

function functionStaffInfoBack(id) {
	const staffInfoWrap = document.querySelector(`.StaffInfoWrap_${id}`);

	if (staffInfoWrap) {
		staffInfoWrap.scrollBy({ left: -200, behavior: "smooth" });
	}
}

function functionStaffImageChangeNoVideo(id, selectedImageSrc) {	
	const mainImage = document.querySelector(`.StaffMainImage_${id}`);

	if (mainImage) {
		mainImage.setAttribute("src", selectedImageSrc);
	}

}
function functionStaffImageChange(id, selectedImageSrc, isVideo, urlVideo, index) {	
	const mainImage = document.querySelector(`.StaffMainImage_${id}`);
	const mainVideo = document.querySelector(`.StaffMainVideo_${id}`);
	const IndexImg = document.querySelector(`#index_img`);

	IndexImg.setAttribute("data-indeximg", index);
	if (isVideo) {
		if (mainVideo) {
			mainVideo.setAttribute("src", urlVideo);
			mainVideo.style.display = "block";
		}
		if (mainImage) {
			mainImage.style.display = "none"; 
		}
	} else {
		if (mainImage) {
			mainImage.setAttribute("src", selectedImageSrc);
			mainImage.style.display = "block";
		}
		if (mainVideo) {
			mainVideo.style.display = "none"; 
		}
	}
}


function functionStaffImageGoLeft(id, paths, pathMobi) {
	const mainImage = document.querySelector(pathMobi ? `.StaffMainImageMobile_${id}` : `.StaffMainImage_${id}`);
	if (!mainImage) return;

	const currentSrc = mainImage.getAttribute("src");

	let currentIndex = paths.indexOf(currentSrc);
	if (currentIndex > 0) {
		currentIndex -= 1;
		mainImage.setAttribute("src", paths[currentIndex]);
	}
}

function functionStaffImageGoRight(id, paths, pathMobi) {
	const mainImage = document.querySelector(pathMobi ? `.StaffMainImageMobile_${id}` : `.StaffMainImage_${id}`);
	if (!mainImage) return;

	const currentSrc = mainImage.getAttribute("src");

	let currentIndex = paths.indexOf(currentSrc);
	if (currentIndex < paths.length - 1) {
		currentIndex += 1;
		mainImage.setAttribute("src", paths[currentIndex]);
	}
}

function functionBackToTop() {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}

function functionGoToZalo () {
	window.location.href = "https://zalo.me/446450905233914858";
}

function functionLinkFilter(url) {
	window.location.href = url;
}

function ensureLeadingSlash(url) {
	if (!url.startsWith("/")) {
		return "/" + url;
	}
	return url;
}

function handleSelectChange(selectElement) {
	const selectedValue = selectElement.value;
	if (selectedValue) {
		location = selectedValue;
	}
}

function getUrlWithPrefix(url) {
	let newUrl = ensureLeadingSlash(url);
	if (props.hashtags) {
		newUrl = "/tags" + newUrl;
	} else if (props.isService) {
		newUrl = "/dich-vu" + newUrl;
	}
	return newUrl;
}

function getUrlWithApetment(locationType, url, apartmentUrl) {
	let newUrl = url;
	if (locationType === "apartment") {
		newUrl = getUrlWithPrefix(url) + "/toa-nha" + ensureLeadingSlash(apartmentUrl);
	} else {
		newUrl = getUrlWithPrefix(url);
	}
	return newUrl;
}

function handleSearch(event, mobile) {
    const input = document.getElementById(mobile ? "searchInputMobile" : "searchInput").value;

	if (event.key === "Enter") {
		window.location.href = `/tim-kiem?filterKeyword=${input}`;
	  }
}

function functionStaffImageGoLeftVideo(id, data) {
	const mainImage = document.querySelector(`.StaffMainImage_${id}`);
	const mainVideo = document.querySelector(`.StaffMainVideo_${id}`);
	const IndexImg = document.querySelector(`#index_img`);
	if (!IndexImg) return;

	const currentSrc = parseInt(IndexImg.getAttribute("data-indeximg"), 10);

	if (currentSrc > 0) {
		const currentData = data[currentSrc - 1];
		if (currentData && currentData.isVideo) {
			if (mainVideo) {
				mainVideo.setAttribute("src", currentData.urlVideo);
				mainVideo.style.display = "block";
			}
			if (mainImage) {
				mainImage.style.display = "none"; 
			}
		} else {
			if (currentData && mainImage) {
				mainImage.setAttribute("src", currentData.path);
				mainImage.style.display = "block";
			}
			if (currentData && mainVideo) {
				mainVideo.style.display = "none"; 
			}
		}
		IndexImg.setAttribute("data-indeximg", currentSrc - 1);
	}
}

function functionStaffImageGoRightVideo(id, data) {
	const mainImage = document.querySelector(`.StaffMainImage_${id}`);
	const mainVideo = document.querySelector(`.StaffMainVideo_${id}`);
	const IndexImg = document.querySelector(`#index_img`);
	if (!IndexImg) return;

	const currentSrc = parseInt(IndexImg.getAttribute("data-indeximg"), 10);

	if (currentSrc < data.length - 1) {
		const currentData = data[currentSrc + 1];
		if (currentData && currentData.isVideo) {
			if (mainVideo) {
				mainVideo.setAttribute("src", currentData.urlVideo);
				mainVideo.style.display = "block";
			}
			if (mainImage) {
				mainImage.style.display = "none"; 
			}
		} else {
			if (currentData && mainImage) {
				mainImage.setAttribute("src", currentData.path);
				mainImage.style.display = "block";
			}
			if (currentData && mainVideo) {
				mainVideo.style.display = "none"; 
			}
		}
		IndexImg.setAttribute("data-indeximg", currentSrc + 1);
	}
}